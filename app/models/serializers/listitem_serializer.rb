class ListitemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :list_id, :place_id, :reviews_id
end
