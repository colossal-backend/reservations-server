
# Reservations System Design

System design of reservations based on Yelp


## Related Projects

- https://github.com/colossal-backend/image-carousel-server

- https://github.com/colossal-backend/reviews-server
  

## Table of Contents

  

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [API](#API)

  

## Usage


1. Create a .env file in the root directory with the following schema:

	DB_HOST=database ip/localhost

	DB_USER=database username

	DB_PASS=database password

	DB=database name

2. Create database 'reservations' in MySQL server

3. `npm install`

4. `npm run seed` to seed the database with dummy data

6. Start the server wtih `npm start`

 
## Requirements

  

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

 
- Node 8+

- MySQL

  

## API
### Find Reservation
`GET /reservations/:restaurant`

#### Parameters
Requires query parameters of party and date
| Name | Type | Description |
| ---- | ---- | ----------- |
| party | `number` | size of group |
| date | `date` | date and time of reservation desired |

#### Response
`reservation` options as JSON objects

### Create Reservation
`POST /reservations/:restaurant`

#### Parameters
The `payload` includes three properties that encode details of the rental listing.
| Type | Description |
| ---- | ----------- |
| `object` | Takes restaurant, party, and date |

#### Properties
| Name | Type | Description |
| --- | --- | --- |
| `restaurant` | `number` | id of selected restaurant |
| `party`  | `number` | size of the party |
| `date` | `string` | date of reservation |

### Update Reservation
`PATCH /reservations/:id`

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | `number` | id of the reservation |

#### Properties
| Name | Type | Description |
| ---- | ---- | ----------- |
| body | `object` | party and date of reservation |

The reservation's party size and date are the only modifiable properties.

### Delete Reservation
`DELETE /reservations/:restaurant/:id`

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | `number` | id of the reservation |
| restaurant | `number` | id of the restaurant |
