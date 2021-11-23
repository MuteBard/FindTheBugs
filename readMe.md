# Debug the problems

    There are issues that are causing problems with in this code.
    Debug the issues and have the values sucessfully appear in the browser in these routes

## 1)
### url:
    at http://localhost:3000/cats/4
    
### what the request output should look like:
    Ori


## 2)
### url:
    http://localhost:3000/cats/update/4
### body:
    {
        "details" : {
            "name" : "Ori the Prince",
            "region": "Atlanta",
            "country": "United States",
            "postalZip": "24319"
        }
    }

### what the request output should look like:
    {
        "id": 4,
        "name": "Ori the Prince",
        "address": "Ap #192-9907 Ut, Ave",
        "phone": "1-683-833-1367",
        "region": "Atlanta",
        "country": "United States",
        "postalZip": "24319"
    }

