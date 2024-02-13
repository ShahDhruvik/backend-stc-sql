CREATE OR REPLACE FUNCTION insert_user(user_first_name TEXT, user_last_name TEXT, user_email TEXT)
RETURNS json AS $$
DECLARE
  new_user RECORD;
BEGIN
  -- Insert the user into the Users table
  INSERT INTO "Users" ("firstName", "lastName","email")
  VALUES (user_first_name, user_last_name, user_email)
  RETURNING * INTO new_user;
  
  -- Convert the new_user record to JSON
  RETURN json_build_object(
    'id', new_user."id",
    'firstName', new_user."firstName",
    'lastName', new_user."lastName",
    'email', new_user."email",
    'isActive', new_user."isActive",
    'isDeleted', new_user."isDeleted",
    'createdAt', new_user."createdAt",
    'updatedAt', new_user."updatedAt"
  );
END;
$$ LANGUAGE plpgsql;
