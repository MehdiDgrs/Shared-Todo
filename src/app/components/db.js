export let users = [];

export default function useAccount(account) {
  users.push(account);
  console.log(users);
}
