class Place < ApplicationRecord
  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
