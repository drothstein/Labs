lab1 : cars_total_output.txt cars_ranked_output.txt
cars_ranked_output.txt : RankLab1.awk cars_total_output.txt
	./RankLab1.awk cars_total_output.txt > cars_ranked_output.txt
cars_total_output.txt : data_lab1/data.csv TotalLab1.awk 
	./TotalLab1.awk data_lab1/data.csv | sort -t, -nk5 -r > cars_total_output.txt