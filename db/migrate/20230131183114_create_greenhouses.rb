class CreateGreenhouses < ActiveRecord::Migration[7.0]
  def change
    create_table :greenhouses do |t|
      t.string :name

      t.timestamps
    end
  end
end
