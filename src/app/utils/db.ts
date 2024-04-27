import * as sql from 'mssql';

export async function connectMSSQL() {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    const pool = await sql.connect({
      user: 'sa',
      password: 'admin@2014',
      server: '192.168.1.253',
      database: 'GestionConges_Prod',
      options: {
        enableArithAbort: true,
        encrypt: false,
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1',
        },
      },
    });

    return pool;
  } catch (err) {
    console.log(err);
  }
}
