import csv
import json

infile_path = r'C:\Users\Husband Fish\Downloads\Read between the headlines - Sheet1(7).csv'
outfile_path = r'C:\Users\Husband Fish\repo\headlines\just_headlines.js'

with open(infile_path, 'rb') as infile, open(outfile_path, 'w') as outfile:
    in_csv = csv.DictReader(infile)
    outfile.write('var headlines = [' + ',\n'.join(json.dumps(row) for row in in_csv) + ']')
