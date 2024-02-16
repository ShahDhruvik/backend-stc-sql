-- FUNCTION: public.get_all_userdetails()

-- DROP FUNCTION IF EXISTS public.get_all_userdetails();

CREATE OR REPLACE FUNCTION public.get_all_userdetails()
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    userdetails_json json;
BEGIN
    -- Start transaction
    BEGIN
        -- Select all Userdetails and join with the Users, Departments, and Designations tables
        SELECT json_agg(json_build_object(
            'id', ud.id,
            'userId', ud.userId,
            'userName', u.name,
            'email', ud.email,
            'gender', ud.gender,
            'bod', ud.bod,
            'departmentId', ud.departmentId,
            'departmentName', d.name,
            'designationId', ud.designationId,
            'designationName', des.name,
            'isActive', ud.isActive,
            'isDeleted', ud.isDeleted,
            'createdAt', ud.createdAt,
            'updatedAt', ud.updatedAt
        )) INTO userdetails_json
        FROM "Userdetails" ud
        JOIN "Users" u ON ud.userId = u.id
        JOIN "Departments" d ON ud.departmentId = d.id
        JOIN "Designations" des ON ud.designationId = des.id;
        
        -- Commit transaction
        RETURN userdetails_json;
    EXCEPTION
        -- Handle exceptions
        WHEN OTHERS THEN
            -- Rollback transaction on error
            ROLLBACK;
            -- Raise exception
            RAISE EXCEPTION 'Error: %', SQLERRM;
    END;
END
$BODY$;

ALTER FUNCTION public.get_all_userdetails()
    OWNER TO postgres;
