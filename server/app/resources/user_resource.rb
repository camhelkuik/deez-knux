class UserResource < JSONAPI::Resource
    attributes :email, :password, :password_digest
end