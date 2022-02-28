lab1 : cars_ranked_output.txt cars_total_output.txt

cars_ranked_output.txt : RankLab1.awk cars_total_output.txt
	./RankLab1.awk cars_total_output.txt > cars_ranked_output.txt

cars_total_output.txt : d66a59b6db4e59c16efd4c42ad411f8e/data.csv TotalLab1.awk 
	./TotalLab1.awk d66a59b6db4e59c16efd4c42ad411f8e/data.csv | sort -t, -nk5 -r > cars_total_output.txt

clean : 
	rm -f cars_total_output.txt cars_ranked_output.txt