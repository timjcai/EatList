class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :slug

  has_many :listitems
end
