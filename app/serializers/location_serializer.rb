class LocationSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :priority, :Trip_id
end
