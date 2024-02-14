-- FUNCTION: public.get_all_users()

-- DROP FUNCTION IF EXISTS public.get_all_users();

CREATE OR REPLACE FUNCTION public.get_all_users(
	)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    users_json json;
BEGIN
    -- Start transaction
    BEGIN
        -- Select all users and aggregate them into a JSON array
        SELECT json_agg(json_build_object(
            'id', id,
            'firstName', "firstName",
            'lastName', "lastName",
            'email', "email",
            'isActive', "isActive",
            'isDeleted', "isDeleted",
            'createdAt', "createdAt",
            'updatedAt', "updatedAt"
        )) INTO users_json
        FROM "Users";
        
        -- Commit transaction
        RETURN users_json;
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

ALTER FUNCTION public.get_all_users()
    OWNER TO postgres;
