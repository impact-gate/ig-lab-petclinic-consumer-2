export class VetDirectoryService {
  constructor(private petclinicUrl: string) {}

  async listVets() {
    const res = await fetch(`${this.petclinicUrl}/api/vets`);
    const data = await res.json();
    return data.map((vet: any) => ({
      name: `${vet.firstName} ${vet.lastName}`,
      specialties: vet.specialties?.map((s: any) => s.name),
    }));
  }

  async getPetTypes() {
    const res = await fetch(`${this.petclinicUrl}/api/pettypes`);
    return res.json();
  }
}

