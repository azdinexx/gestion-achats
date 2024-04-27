import React from 'react';
import { connectMSSQL } from '../utils/db';
import { TypeEmploye } from '@/types';

async function page() {
  const sql = await connectMSSQL();
  if (!sql) {
    return (
      <div>
        <h1>Connection failed</h1>
      </div>
    );
  }
  const result = await sql.query`select * from Employe`;
  return (
    <div>
      {result.recordset.map((record: TypeEmploye) => {
        return (
          <div key={record.id}>
            <h1>{record.NomPrenom}</h1>
            <p>{record.Fonction}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
