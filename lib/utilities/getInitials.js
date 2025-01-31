// Copyright (C) 2019 Hoola Inc
//
// This file is part of xDemic Mobile App.
//
// xDemic Mobile App is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// xDemic Mobile App is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with xDemic Mobile App.  If not, see <http://www.gnu.org/licenses/>.
//
export function getInitials(name) {
  if (!name) {
    return "";
  }
  if (name.match(/did:ethr:0x[0-9a-fA-F]+/)) {
    return name.slice(11, 13).toUpperCase();
  }
  if (name.match(/did:uport:.+/)) {
    return name.slice(12, 14);
  }
  if (name.match(/0x[0-9a-fA-F]+/)) {
    return name.slice(2, 4);
  }
  let initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
}
