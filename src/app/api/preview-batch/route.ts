import Papa from "papaparse";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const text = await file.text();

    const parsed = Papa.parse(text, {
      header: true,
      skipEmptyLines: true
    });

    const rows = parsed.data as any[];

    let valid = 0;
    let invalid = 0;

    rows.forEach((row) => {
      if (
        row.first_name &&
        row.last_name &&
        row.address_line1 &&
        row.city &&
        row.state &&
        row.zip
      ) {
        valid++;
      } else {
        invalid++;
      }
    });

    return Response.json({
      totalRows: rows.length,
      validRows: valid,
      invalidRows: invalid
    });

  } catch (error) {
    return Response.json({ error: "Failed to parse file" }, { status: 500 });
  }
}
