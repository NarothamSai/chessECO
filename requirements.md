[Problem Statement]
Build a Backend in NodeJs/Golang which memorizes chess moves. The ECO Codes is an Encyclopedia classification system for the chess openings moves. It is a repository of the most important or the Top 100 chess opening moves compiled by an organization called Chess Informant.

[Minimum requirement]

- Scrape Data from the given link
  - Scrape by URL gets more points
  - Hard coded data by candidate gets low points
- A GET request to “/” must list all the data as it is.
- A GET request to “/CODE” must list the move associated with that code in the ECO table.

  Example

  C87

  Must return

  Ruy Lopez

  1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 d6

[Plus point]

- As the Data does not change, cache the results with a TTL of 180 seconds/3 minutes
- Deploy the Backend App on Heroku/AWS/Azure/GCP or any other backend cloud service of your choice (Link must be active for at least 2 weeks from the date of submission.)

[Advanced]

- Construct a Computer bot which plays chess.(Fetches next move)

  I.e A GET request on /C87/e4/e5/Nf3/Nc6/Bb5/a6/Ba4

  Must return

  And so on for every path.

[Guide]</strong>
ECO List -
https://www.chessgames.com/chessecohelp.html
