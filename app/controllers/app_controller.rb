class AppController < ApplicationController
  def index
    @query = params[:q]
    parameters = { term: @query, limit: 16 }
    respond_to do |format|
      format.html { render :index }
      format.json { render json: Yelp.client.search("Charleston", parameters) }
    end
  end

end
