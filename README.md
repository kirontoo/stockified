<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kirontoo/stockified">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Stockified</h3>

  <p align="center">
		A home inventory API
    <br />
    <a href="https://github.com/kirontoo/stockified"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kirontoo/stockified">View Demo</a>
    ·
    <a href="https://github.com/kirontoo/stockified/issues">Report Bug</a>
    ·
    <a href="https://github.com/kirontoo/stockified/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
	* [.env File](#.env-file)
* [Roadmap](#roadmap)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`kirontoo`, `stockified`, `twitter_handle`, `kirontoo@gmail.com`


### Built With

* [PostgreSQL](https://www.postgresql.org/)
* [Nodejs](https://www.nodejs.org/)
* [Docker](https://www.docker.com)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/kirontoo/stockified.git
```
2. Create `.env` file. Use `.env.sample` file as reference.
3. Run docker / Adminer
```sh
docker-compose up
```
4. Install NPM packages
```sh
npm install
```
5. Migrate the database
```sh
npm run migrate
```
Adminer will be run on ```http://localhost:8080```


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

### .env File
Make sure to have the PostgreSQL user, password and db value set
```
POSTGRES_PASSWORD=admin
POSTGRES_USER=admin
POSTGRES_DB=stockified_app
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kirontoo/stockified/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - kirontoo@gmail.com

Project Link: [https://github.com/kirontoo/stockified](https://github.com/kirontoo/repo_name)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kirontoo/repo.svg?style=flat-square
[contributors-url]: https://github.com/kirontoo/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kirontoo/repo.svg?style=flat-square
[forks-url]: https://github.com/kirontoo/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/kirontoo/repo.svg?style=flat-square
[stars-url]: https://github.com/kirontoo/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/kirontoo/repo.svg?style=flat-square
[issues-url]: https://github.com/kirontoo/repo/issues
[license-shield]: https://img.shields.io/github/license/kirontoo/repo.svg?style=flat-square
[license-url]: https://github.com/kirontoo/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kirontoo
[product-screenshot]: images/screenshot.png
