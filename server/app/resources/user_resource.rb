class UserResource < JSONAPI::Resource
    attributes :email, :password
    # has_many :phone_numbers
  end