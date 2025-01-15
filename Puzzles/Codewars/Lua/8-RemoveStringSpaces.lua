local kata = {}

function kata.noSpace(str)
  return string.gsub(str, " ", "")
end

return kata
