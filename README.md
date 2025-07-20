# SOLID Node.js REST API

A TypeScript REST API project demonstrating SOLID principles for software architecture study. This project showcases clean architecture patterns and dependency injection to create maintainable and testable code.

## 🏗️ Project Structure

```
src/
├── app.ts                          # Express app configuration
├── server.ts                       # Server entry point (port 3333)
├── routes.ts                       # API routes
├── entities/
│   └── User.ts                    # Domain entity with UUID generation
├── repositories/
│   ├── IUsersRepository.ts         # Repository interface
│   └── implementations/
│       └── PostgresUsersRepository.ts # In-memory repository implementation
├── providers/
│   ├── IMailProvider.ts           # Mail provider interface
│   └── implementations/
│       └── MailtrapMailProvider.ts # Mail provider implementation
└── useCases/
    └── CreateUser/
        ├── CreateUserUseCase.ts    # Business logic with validation
        ├── CreateUserController.ts  # HTTP controller with error handling
        ├── CreateUserDTO.ts        # Data transfer object
        └── CreateUserUseCase.spec.ts # Test file (ready for implementation)
```

## 🎯 SOLID Principles Implementation

### 1. **Single Responsibility Principle (SRP)**
Each class has a single, well-defined responsibility:
- `User` entity: Represents user data with UUID generation
- `CreateUserUseCase`: Handles user creation business logic and validation
- `CreateUserController`: Handles HTTP request/response
- `MailtrapMailProvider`: Handles email sending via SMTP
- `PostgresUsersRepository`: Handles user data persistence
- `IUsersRepository`: Defines data access contract

### 2. **Open/Closed Principle (OCP)**
The system is open for extension but closed for modification:
- New mail providers can be added by implementing `IMailProvider`
- New repository implementations can be added by implementing `IUsersRepository`
- New use cases can be added without modifying existing code
- New controllers can be added without affecting business logic

### 3. **Liskov Substitution Principle (LSP)**
Any implementation of an interface can be substituted without breaking the application:
- Any `IMailProvider` implementation can be used in `CreateUserUseCase`
- Any `IUsersRepository` implementation can be used in `CreateUserUseCase`
- The in-memory repository can be replaced with a real database implementation

### 4. **Interface Segregation Principle (ISP)**
Interfaces are specific and focused:
- `IMailProvider` only defines mail-related methods
- `IUsersRepository` only defines user data access methods
- `CreateUserRequestDTO` only contains user creation data

### 5. **Dependency Inversion Principle (DIP)**
High-level modules don't depend on low-level modules:
- `CreateUserUseCase` depends on abstractions (`IMailProvider`, `IUsersRepository`)
- `CreateUserController` depends on `CreateUserUseCase` abstraction
- Dependencies are injected through constructors

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd solid-node
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The API will be available at `http://localhost:3333`

## 📚 API Endpoints

### Create User
- **POST** `/users`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
- **Response:** `201 Created` on success
- **Error Handling:** `400 Bad Request` with error message on failure

## 🏛️ Architecture Patterns

### Clean Architecture
The project follows clean architecture principles:
- **Entities**: Core business objects (`User`)
- **Use Cases**: Application business rules (`CreateUserUseCase`)
- **Controllers**: Handle HTTP requests (`CreateUserController`)
- **Interfaces**: Contracts for external dependencies
- **Implementations**: Concrete implementations of interfaces

### Dependency Injection
Dependencies are injected through constructors, making the code:
- **Testable**: Easy to mock dependencies
- **Flexible**: Easy to swap implementations
- **Maintainable**: Clear dependency relationships

### Repository Pattern
Data access is abstracted through repository interfaces:
- `IUsersRepository` defines the contract for user data operations
- `PostgresUsersRepository` provides in-memory implementation
- Concrete implementations can be swapped without affecting business logic

### Provider Pattern
External services are abstracted through provider interfaces:
- `IMailProvider` defines the contract for email operations
- `MailtrapMailProvider` implements email sending via SMTP
- Different email services can be implemented (SendGrid, AWS SES, etc.)

## 📦 Dependencies

### Production
- `express`: Web framework
- `nodemailer`: Email sending
- `uuidv4`: UUID generation

### Development
- `typescript`: TypeScript compiler
- `ts-node-dev`: Development server with hot reload
- `@types/express`: TypeScript definitions for Express
- `@types/nodemailer`: TypeScript definitions for Nodemailer

## 🎓 Learning Objectives

This project demonstrates:
- ✅ SOLID principles in practice
- ✅ Clean architecture implementation
- ✅ Dependency injection patterns
- ✅ Interface segregation
- ✅ Repository and provider patterns
- ✅ TypeScript best practices
- ✅ Express.js with TypeScript
- ✅ Error handling and validation
- ✅ Email service integration
- ✅ Ready for testing implementation