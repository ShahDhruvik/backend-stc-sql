CREATE OR REPLACE FUNCTION public.get_one_designation(
	designation_id integer DEFAULT 0)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    designation_record "Designations"%ROWTYPE;
    designation_json json;
BEGIN
    BEGIN
        SELECT * INTO designation_record FROM "Designations" WHERE id = designation_id;
        IF NOT FOUND THEN
            RETURN NULL;
        END IF;
        designation_json := json_build_object(
            'id', designation_record.id,
            'name', designation_record."name",
            'code', designation_record."code",
			'isActive', designation_record."isActive",
			'isDeleted', designation_record."isDeleted",
			'createdAt', designation_record."createdAt",
			'updatedAt', designation_record."updatedAt"
        );
        RETURN designation_json;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE EXCEPTION 'Error: %', SQLERRM;
    END;
END
$BODY$;

ALTER FUNCTION public.get_one_designation(integer)
    OWNER TO postgres;
