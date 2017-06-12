class CreateShipments < ActiveRecord::Migration[5.1]
    def change
    	create_table :shipments do |t|

    		t.text :list
    		t.text :name
    		t.text :phone
    		t.text :address
    		t.timestamps
    		
    	end
    end
end
