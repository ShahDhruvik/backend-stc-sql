CREATE OR REPLACE FUNCTION public.get_one_user(
	user_id integer DEFAULT 0)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    user_record "Users"%ROWTYPE;
    user_json json;
BEGIN
    BEGIN
        SELECT * INTO user_record FROM "Users" WHERE id = user_id;
        IF NOT FOUND THEN
            RETURN NULL;
        END IF;
        user_json := json_build_object(
            'id', user_record.id,
            'name', user_record."name",
            'mobileNo', user_record."mobileNo",
			'isActive', user_record."isActive",
			'isDeleted', user_record."isDeleted",
			'createdAt', user_record."createdAt",
			'updatedAt', user_record."updatedAt"
        );
        RETURN user_json;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE EXCEPTION 'Error: %', SQLERRM;
    END;
END
$BODY$;

ALTER FUNCTION public.get_one_user(integer)
    OWNER TO postgres;
