class AppController < ApplicationController
  def index
    @query = 'restaurant+' + params[:q].to_s
    parameters = { term: @query, limit: 20, sort:0 }
    respond_to do |format|
      format.html { render :index }
      format.json { render json: Yelp.client.search("Charleston", parameters) }
    end
  end

end
