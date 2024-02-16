-- FUNCTION: public.get_all_designation()

-- DROP FUNCTION IF EXISTS public.get_all_designation();

CREATE OR REPLACE FUNCTION public.get_all_designation(
	)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    designation_json json;
BEGIN
    -- Start transaction
    BEGIN
        -- Select all Designations and aggregate them into a JSON array
        SELECT json_agg(json_build_object(
            'id', id,
            'name', "name",
            'code', "code",
            'isActive', "isActive",
            'isDeleted', "isDeleted",
            'createdAt', "createdAt",
            'updatedAt', "updatedAt"
        )) INTO designation_json
        FROM "Departments";
        
        -- Commit transaction
        RETURN designation_json;
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

ALTER FUNCTION public.get_all_designation()
    OWNER TO postgres;



