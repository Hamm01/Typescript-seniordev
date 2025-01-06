type Role = 'admin' | 'user' | 'moderator'
type otherRole = 'testing' | 'admin' | 'user' | 'security'

type T = Extract<Role, otherRole>

// in this type T has both the common types like admin and user

type B = Extract<Role, 'admin' | 'user'>

// we can extract the type from role. only and admin and user will extracted and used in type B
