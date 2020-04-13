class User < ApplicationRecord
  has_many :todo_lists
  has_secure_password
end
