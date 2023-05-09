class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :menu, :location, :slug, :website
  has_many :listitems
end
