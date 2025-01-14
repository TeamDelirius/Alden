local kata = {}

function kata.noSpace(str)
  return string.gsub(str, "%s", "")
end

return kata
