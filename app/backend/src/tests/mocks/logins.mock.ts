const correctUser = {dataValues: {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  // senha: secret_admin
}}

const wrongUser = {
    id: 3,
    username: 'User',
    role: 'user',
    email: '@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
    // senha: secret_user
}

const token = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjg3MTE5NzQ0fQ.zr48vG41_niedYg3U4HZfN5nSYjMX8-FNH_-wJos09E'
}

export {
  correctUser,
  wrongUser,
  token,
}
