CREATE OR REPLACE FUNCTION public.get_one_department(
	department_id integer DEFAULT 0)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    department_record "Departments"%ROWTYPE;
    department_json json;
BEGIN
    BEGIN
        SELECT * INTO department_record FROM "Departments" WHERE id = department_id;
        IF NOT FOUND THEN
            RETURN NULL;
        END IF;
        department_json := json_build_object(
            'id', department_record.id,
            'name', department_record."name",
            'code', department_record."code",
			'isActive', department_record."isActive",
			'isDeleted', department_record."isDeleted",
			'createdAt', department_record."createdAt",
			'updatedAt', department_record."updatedAt"
        );
        RETURN department_json;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE EXCEPTION 'Error: %', SQLERRM;
    END;
END
$BODY$;

ALTER FUNCTION public.get_one_department(integer)
    OWNER TO postgres;
