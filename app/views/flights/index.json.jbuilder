json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_name, :origin, :destination, :flight_date, :airplane_id
  json.url flight_url(flight, format: :json)
end
