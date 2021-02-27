class Trip < ApplicationRecord
    has_many :locations


    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    

end
