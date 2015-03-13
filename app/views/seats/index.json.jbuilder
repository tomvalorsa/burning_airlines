json.array!(@seats) do |seat|
  json.extract! seat, :id, :flight_id, :row, :column, :reserved, :user_id
  json.url seat_url(seat, format: :json)
end
