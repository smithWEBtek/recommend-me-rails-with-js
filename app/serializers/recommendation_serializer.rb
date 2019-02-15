class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :category_id, :upcase

  belongs_to :user
  belongs_to :category
  has_many :comments
  has_many :commentors, :class_name => 'User', through: :comments
end
