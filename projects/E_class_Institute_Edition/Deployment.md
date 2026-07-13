# e_class Institution Edition - Deployment

## Overview

The application was developed with a flexible deployment approach.

During development and usage, the system can operate using a local server environment while supporting future migration to remote hosting.

---



# Local Deployment

Development environment:

- Flutter Application
- XAMPP
- Apache Server
- PHP Backend
- MySQL Database

Architecture:


Local Computer

Flutter Application

    |

Apache + PHP API

    |

MySQL Database


---

# Remote Deployment

The application can communicate with a remote backend by changing the API endpoint configuration.

Architecture:


Flutter Application

    |

Remote API

    |

PHP Backend

    |

Database


---

# Configuration Management

The backend URL is stored separately from application logic.

Benefits:

- Easier server migration
- Easier testing
- Reduced code modification during deployment

---

# Database Recovery Consideration

During development, unexpected shutdowns of the local database environment could cause database availability problems.

A recovery process was created to simplify restoring database operation and reduce manual troubleshooting.

---

# Future Deployment Improvements

Possible improvements:

- Cloud hosting
- Automated backups
- HTTPS configuration
- Database monitoring
- Centralized management

___
## Device Requirements

The QR scanning functionality requires:

- Camera access permission
- Mobile device with camera support
- Proper application permissions

___