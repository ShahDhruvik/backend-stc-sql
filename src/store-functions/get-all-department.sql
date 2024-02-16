-- FUNCTION: public.get_all_department()

-- DROP FUNCTION IF EXISTS public.get_all_department();

CREATE OR REPLACE FUNCTION public.get_all_department(
	)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    department_json json;
BEGIN
    -- Start transaction
    BEGIN
        -- Select all Departments and aggregate them into a JSON array
        SELECT json_agg(json_build_object(
            'id', id,
            'name', "name",
            'code', "code",
            'isActive', "isActive",
            'isDeleted', "isDeleted",
            'createdAt', "createdAt",
            'updatedAt', "updatedAt"
        )) INTO department_json
        FROM "Departments";
        
        -- Commit transaction
        RETURN department_json;
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

ALTER FUNCTION public.get_all_department()
    OWNER TO postgres;
