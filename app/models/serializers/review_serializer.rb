class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :comment
  has_many :listitems
end
