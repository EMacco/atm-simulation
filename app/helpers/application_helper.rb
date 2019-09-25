module ApplicationHelper
  def strip_whitespace(details)
    trimmed_details = {}
    details.each do |key, value|
      trimmed_details[key.to_s] = value.squish if value.is_a? String
    end
    trimmed_details
  end
end
