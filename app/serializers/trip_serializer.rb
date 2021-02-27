class TripSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :description, :slug, :priority

  has_many :locations
end
