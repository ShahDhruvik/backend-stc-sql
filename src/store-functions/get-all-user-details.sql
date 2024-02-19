-- FUNCTION: public.get_all_user_details()

-- DROP FUNCTION IF EXISTS public.get_all_user_details();

CREATE OR REPLACE FUNCTION public.get_all_user_details(
	)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    users_details_json json;
BEGIN
    -- Start transaction
    BEGIN
        -- Select all users and aggregate them into a JSON array
        SELECT json_agg(json_build_object(
            'id', "UserDetails".id,
            'dob', "UserDetails"."dob",
            'gender', "UserDetails"."gender",
			'email',"UserDetails"."email",
			'departmentId',"UserDetails"."departmentId",
			'designationId',"UserDetails"."designationId",
			'userId',"UserDetails"."userId",
            'isActive', "UserDetails"."isActive",
            'isDeleted', "UserDetails"."isDeleted",
            'createdAt', "UserDetails"."createdAt",
            'updatedAt', "UserDetails"."updatedAt",
            'department', CASE
                                WHEN "Departments"."id" IS NOT NULL THEN
                                    json_build_object(
                                        'id', "Departments".id,
                                        'code', "Departments".code,
                                        'name', "Departments".name
                                    )
                                ELSE
                                    NULL
                            END,
			 'designation', CASE
                                WHEN "Designations"."id" IS NOT NULL THEN
                                    json_build_object(
                                        'id', "Designations".id,
                                        'code', "Designations".code,
                                        'name', "Designations".name
                                    )
                                ELSE
                                    NULL
                            END,
			 'user', CASE
                                WHEN "Users"."id" IS NOT NULL THEN
                                    json_build_object(
                                        'id', "Users".id,
                                        'mobile', "Users".mobile,
                                        'name', "Users".name
                                    )
                                ELSE
                                    NULL
                            END
			
        )) INTO users_details_json
        FROM "UserDetails"
        LEFT JOIN "Departments" ON "UserDetails"."departmentId" = "Departments".id
		LEFT JOIN "Designations" ON "UserDetails"."designationId" = "Designations".id
        LEFT JOIN "Users" ON "UserDetails"."userId" = "Users".id;
        -- Commit transaction
        RETURN users_details_json;
    EXCEPTION
        -- Raise exception
        WHEN OTHERS THEN
            -- Raise exception
            RAISE EXCEPTION 'Error: %', SQLERRM;
    END;
END
$BODY$;

ALTER FUNCTION public.get_all_user_details()
    OWNER TO postgres;
