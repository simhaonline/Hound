package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	elasticsearch "github.com/elastic/go-elasticsearch/v8"
)

type ElasticResponse struct {
	Shards struct {
		Failed     int `json:"failed"`
		Skipped    int `json:"skipped"`
		Successful int `json:"successful"`
		Total      int `json:"total"`
	} `json:"_shards"`
	Hits struct {
		Hits []struct {
			ID     string `json:"_id"`
			Index  string `json:"_index"`
			Score  int    `json:"_score"`
			Source struct {
				Timestamp time.Time `json:"@timestamp"`
				Version   string    `json:"@version"`
				Area      float64   `json:"area"`
				Bathrooms int       `json:"bathrooms"`
				Email     string    `json:"email"`
				FirstName string    `json:"firstName"`
				Garage    int       `json:"garage"`
				Host      string    `json:"host"`
				LastName  string    `json:"lastName"`
				Location  struct {
					Lat float64 `json:"lat"`
					Lon float64 `json:"lon"`
				} `json:"location"`
				MedianIncome int    `json:"median_income"`
				Path         string `json:"path"`
				Population   int    `json:"population"`
				Postcode     int    `json:"postcode"`
				Rooms        int    `json:"rooms"`
				SellType     string `json:"sellType"`
				Sold         bool   `json:"sold"`
				State        string `json:"state"`
				Suburb       string `json:"suburb"`
				UID          int    `json:"uid"`
			} `json:"_source"`
			Type string `json:"_type"`
		} `json:"hits"`
		MaxScore int `json:"max_score"`
		Total    struct {
			Relation string `json:"relation"`
			Value    int    `json:"value"`
		} `json:"total"`
	} `json:"hits"`
	TimedOut bool `json:"timed_out"`
	Took     int  `json:"took"`
}

func PrettyPrint(object interface{}) {

	ob, err := json.MarshalIndent(object, "", "    ")
	if err != nil {
		fmt.Println("There was an error", err)
	}
	fmt.Println(string(ob))
}

func main() {
	conf := elasticsearch.Config{
		Username: "admin",
		Password: "admin",
		Addresses: []string{
			"http://localhost:9200",
		},
	}
	es, err := elasticsearch.NewClient(conf)
	if err != nil {
		log.Fatalf("Error creating the client: %s", err)
	}

	// Instantiate a mapping interface for API response
	// Create a context object for the API calls
	ctx := context.Background()
	var query = `{"query": {"match_all" : {}},"size": 100}`
	// Concatenate a string from query for reading
	var b strings.Builder
	b.WriteString(query)
	read := strings.NewReader(b.String())
	var buf bytes.Buffer
	// Attempt to encode the JSON query and look for errors
	if err := json.NewEncoder(&buf).Encode(read); err != nil {
		log.Fatalf("Error encoding query: %s", err)

		// Query is a valid JSON object
	}
	fmt.Println("json.NewEncoder encoded query:", read, "\n")
	// Pass the JSON query to the Golang client's Search() method
	res, err := es.Search(
		es.Search.WithContext(ctx),
		es.Search.WithIndex("hound-aus"),
		es.Search.WithBody(read),
		es.Search.WithTrackTotalHits(true),
		es.Search.WithPretty(),
	)
	// Check for any errors returned by API call to Elasticsearch
	if err != nil {
		log.Fatalf("Elasticsearch Search() API ERROR:", err)
	}
	// Close the result body when the function call is complete
	defer res.Body.Close()
	// var r map[string]interface{}
	r := new(ElasticResponse)
	if err := json.NewDecoder(res.Body).Decode(&r); err != nil {
		fmt.Println("Error parsing the response body:", err)
	} else {
		// Print the response status and indexed document version.
		// PrettyPrint(r)
		fmt.Println("We got raw data!")
	}
	for _, obj := range r.Hits.Hits {
		fmt.Println(obj.Source.Email)
	}

}
