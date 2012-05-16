for fname in `find . -type f -regex ".*\.\(js\|java\|html\|xml\)"`
do
    expand -t 4 $fname > aux.txt
    cat aux.txt > $fname
done

rm aux.txt
