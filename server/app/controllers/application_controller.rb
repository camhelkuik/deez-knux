# class ApplicationController < ActionController::API
#     include JSONAPI::ActsAsResourceController
  
#     # Prevent CSRF attacks by raising an exception.
#     # For APIs, you may want to use :null_session instead.
#     # protect_from_forgery with: :null_session
# end

# per controller basis?
# class ApplicationController < JSONAPI::ResourceController
#     # Prevent CSRF attacks by raising an exception.
#     # For APIs, you may want to use :null_session instead.
#     protect_from_forgery with: :null_session
#   end

class ApplicationController < ActionController::API
        include JSONAPI::ActsAsResourceController
    # skip_before_action :verify_authenticity_token
  
    private
  
    def context
      { current_user: current_user }
    end
  
    def current_user
      @current_user ||= User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end
  end