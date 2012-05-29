# A Commenter is a free standing User who may add annotations or comments 
# to documents for which they have permissions to annotate
class Commenter < ActiveRecord::Base
  
  #belongs_to :account     # Accounts must all have an associated commentor
  has_many :annotations
  has_one :account

  validates_presence_of :first_name, :last_name
  
  # The internal marshaled representation for a Commenter
  def canonical(options={})
    attrs = {
      'id'           => id,
      'first_name'   => first_name,
      'last_name'    => last_name,
      'hashed_email' => hashed_email
    }
  end
  
  def hashed_email
    @hashed_email ||= Digest::MD5.hexdigest(email.downcase.gsub(/\s/, ''))
  end
  
  # The JSON representation for a Commenter
  # intended for public consumption
  def to_json(options={})
    canonical(options).to_json
  end

  # things to steal from account
  def self.log_in
    # stub
  end
  
  def authenticate
  end
  
end
