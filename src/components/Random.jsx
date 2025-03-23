import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReloadIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useGetUsersQuery } from '@/features/api/randomUserApi'

const Random = () => {
    const { data, error, refetch, isLoading } = useGetUsersQuery();

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-3xl p-3 shadow-xl rounded-lg bg-white flex flex-col items-center">
        <CardHeader className="text-center text-xl font-semibold pb-2">
          Get a Random User
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-3 w-full">
          <Button
            onClick={refetch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <ReloadIcon className="animate-spin" />
            ) : (
              "Fetch New User"
            )}
          </Button>

          {isLoading && <p className="text-gray-500">Fetching user...</p>}
          {error && <p className="text-red-500">Error fetching user</p>}

          {data?.data && (
            <Card className="w-full bg-gray-50 border rounded-lg shadow-md flex flex-row items-center p-4">
              <CardContent className="text-left w-full">
                <p className="text-lg font-medium">
                  Name: <span className="font-normal">{data.data.name.first} {data.data.name.last}</span>
                </p>
                <p className="font-bold mt-1">Email: <span className="font-normal">{data.data.email}</span></p>
                <p className="font-bold mt-1">Phone: <span className="font-normal">{data.data.phone}</span></p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Random
