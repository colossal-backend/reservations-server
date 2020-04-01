
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
### Get Reservation
`GET /reservations/:restaurantId/:partySize`
#### Response
`reservation` JSON object

### Create Reservation
`POST /reservations`

#### Parameters
The request body `data` includes three properties that encode details of the rental listing.
| Name | Type | Description |
| ---- | ---- | ----------- |
| body | object | Takes restaurantId, partySize, and date |

#### Properties
| Name | Type | Description |
| --- | --- | --- |
| `restaurantId` | `number` | id of selected restaurant |
| `partySize`  | `number` | size of the party |
| `date` | `string` | date of reservation |

### Update Reservation
`PATCH /reservations/:id/update`

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | number | id of the reservation |

#### Properties
| Name | Type | Description |
| ---- | ---- | ----------- |
| body | object | partySize and date of reservation |

The reservation's party size and date are the only modifiable properties.

### Delete Reservation
`DELETE /reservations/:id/delete`

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| id | number | id of the reservation |
